import { useEffect, useRef } from 'react'

const cubeFaces = [
  { className: 'front', src: '/showcase/guide-04.jpg', label: 'Guided drilling' },
  { className: 'back', src: '/showcase/guide-03.jpg', label: 'Full-arch support' },
  { className: 'right', src: '/showcase/guide-01.jpg', label: 'Guide body' },
  { className: 'left', src: '/showcase/guide-02.jpg', label: 'Multi-sleeve guide' },
  { className: 'top', src: '/showcase/planning-05.jpg', label: 'Digital planning' },
  { className: 'bottom', src: '/showcase/guide-08.jpg', label: 'Open-arch guide' },
]

export default function InteractiveCube() {
  const stageRef = useRef<HTMLDivElement>(null)
  const cubeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    let targetX = -12
    let targetY = 28
    let currentX = targetX
    let currentY = targetY
    let interacting = false

    const animate = () => {
      if (!interacting) targetY += 0.12
      currentX += (targetX - currentX) * 0.075
      currentY += (targetY - currentY) * 0.075
      cubeRef.current?.style.setProperty('transform', `rotateX(${currentX}deg) rotateY(${currentY}deg)`)
      frame = requestAnimationFrame(animate)
    }

    const stage = stageRef.current
    const move = (event: PointerEvent) => {
      if (!stage) return
      const bounds = stage.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5
      targetY = x * 110
      targetX = y * -80
    }
    const enter = () => { interacting = true }
    const leave = () => {
      interacting = false
      targetX = -12
    }

    stage?.addEventListener('pointerenter', enter)
    stage?.addEventListener('pointermove', move)
    stage?.addEventListener('pointerleave', leave)
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      stage?.removeEventListener('pointerenter', enter)
      stage?.removeEventListener('pointermove', move)
      stage?.removeEventListener('pointerleave', leave)
    }
  }, [])

  return (
    <aside className="cube-panel" aria-label="Interactive surgical guide gallery">
      <div className="cube-panel-copy">
        <span className="cube-status"><i /> interactive case gallery</span>
        <p>Move your pointer across the cube</p>
      </div>
      <div className="cube-stage" ref={stageRef}>
        <div className="cube-glow" aria-hidden="true" />
        <div className="photo-cube" ref={cubeRef}>
          {cubeFaces.map((face) => (
            <figure className={`cube-face cube-face--${face.className}`} key={face.className}>
              <img src={face.src} alt={face.label} draggable="false" />
              <figcaption>{face.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="cube-shadow" aria-hidden="true" />
      </div>
      <div className="cube-tags" aria-hidden="true">
        <span>CBCT planning</span>
        <span>Implant guides</span>
        <span>Precision fit</span>
      </div>
    </aside>
  )
}
