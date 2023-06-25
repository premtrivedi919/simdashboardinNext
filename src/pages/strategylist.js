import React from 'react'
import EnhancedTable from "../components/strategylist.js";
import TablePage from '@/components/table.js';

import ResponsiveAppBar from "../components/header.js";

const strategylist = ()=>{
  return (
    <div className="body">
    <ResponsiveAppBar />
<TablePage />
    </div>
  )
}
export default strategylist;