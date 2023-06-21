import React from 'react'
import EnhancedTable from "../components/settings.js";
import ResponsiveAppBar from "../components/header.js";

export default function setting() {
  return (
    <div>
       <ResponsiveAppBar/>
       <EnhancedTable/>
    </div>
  )
}
