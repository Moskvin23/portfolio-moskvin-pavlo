import { useEffect, useRef, useState } from "react"
import "./style.css"

const devices = {
  desktop: { label: "Desktop", width: 1440, height: 900 },
  tablet: { label: "Tablet", width: 820, height: 1000 },
  mobile: { label: "Mobile", width: 390, height: 800 },
}

const Preview = ({ project }) => {
  const hasLive = Boolean(project.demoVersion)
  const [device, setDevice] = useState("desktop")
  const [width, setWidth] = useState(0)
  const stageRef = useRef(null)

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setWidth(el.clientWidth))
    ro.observe(el)
    setWidth(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const d = devices[device]
  const scale = width ? Math.min(1, (width - 32) / d.width) : 1
  const shot = project.imgBig

  return (
    <div className="preview">
      <div className="preview__toolbar">
        <div className="seg">
          {Object.entries(devices)
            .filter(([key]) => !(project.noMobile && key === "mobile"))
            .map(([key, v]) => (
            <button key={key} className={device === key ? "is-on" : ""} onClick={() => setDevice(key)}>
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="preview__stage" ref={stageRef}>
        <div className="preview__frame" style={{ width: d.width * scale }}>
          <div className="preview__bar">
            <i /> <i /> <i />
            <span>{project.demoVersion ? project.demoVersion.replace("https://", "") : project.title}</span>
          </div>
          {hasLive ? (
            <div style={{ width: d.width * scale, height: d.height * scale, overflow: "hidden" }}>
              <iframe
                title={project.title}
                src={project.demoVersion}
                loading="lazy"
                style={{
                  width: d.width,
                  height: d.height,
                  transform: `scale(${scale})`,
                  transformOrigin: "0 0",
                }}
              />
            </div>
          ) : (
            <div className="preview__shot" style={{ height: d.height * scale }}>
              <img src={shot} alt={`${project.title} — ${d.label}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Preview
