"use client"

import "./tabs.css"

type TabType = "all" | "ready" | "building"

interface TabsProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

const Tabs = ({activeTab, setActiveTab}: TabsProps) => {


  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          Все <span>(4723)</span>
        </button>
        <button
          className={`tab ${activeTab === "ready" ? "active" : ""}`}
          onClick={() => setActiveTab("ready")}
        >
          Готовые <span>(1045)</span>
        </button>
        <button
          className={`tab ${activeTab === "building" ? "active" : ""}`}
          onClick={() => setActiveTab("building")}
        >
          Строящиеся <span>(2457)</span>
        </button>
      </div>

    </div>
  )
}

export default Tabs
