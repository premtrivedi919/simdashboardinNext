import React from 'react'
import EnhancedTable from "../components/strategylist.js";
import ResponsiveAppBar from "../components/header.js";

export default function strategy() {
  return (
    <div>
            <ResponsiveAppBar />

      <EnhancedTable/>
    </div>
  )
}
