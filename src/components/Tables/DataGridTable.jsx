import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { exportExcel } from '../../utils/excelExport';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarDensitySelector,
    GridToolbarQuickFilter 
  } from '@mui/x-data-grid';
import { Box, Button  } from '@mui/material';
import { grey, green, } from '@mui/material/colors';

const CustomToolbar = () => (
    <GridToolbarContainer>
      <GridToolbarColumnsButton /> {/* Shows column toggle */}
      <GridToolbarFilterButton />  {/* Shows filter panel */}
      <GridToolbarDensitySelector /> {/* Shows density selector */}
      <Button size='small' onClick={exportExcel}><DownloadIcon fontSize='small' /> PDF</Button>
      <Button size='small' onClick={exportExcel}><DownloadIcon fontSize='small' /> Excel</Button>
      {/* Exclude GridToolbarExport here */}
    </GridToolbarContainer>
  );

function QuickSearchToolbar() {
  return (
    <Box sx={{ p: 1 }}>
      <GridToolbarQuickFilter  sx={{
          "& .MuiInputBase-root": {
            height: "30px",
            minWidth: "150px",
            fontSize: "0.8rem", 
          }
        }} />
    </Box>
  );
}

function DataGridTable({columns, rows, paginationModel, showToolber, enableCheckboxSelection,  columnVisibilityModel}) {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            //getRowHeight={() => 'auto'}
            checkboxSelection={enableCheckboxSelection}
            disableColumnMenu
            slots={{ toolbar: QuickSearchToolbar }}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10, 15, 20]}
            columnVisibilityModel={columnVisibilityModel}
            sx={{
              boxShadow: 2,
              '& .MuiDataGrid-columnHeaders': {
                borderBottom: '2px solid',
                borderColor: green[400],
                color: grey[50]
              },
              '& .table-header': {
                  backgroundColor: green[300],
                },
              '& .MuiDataGrid-scrollbarFiller': {
                  backgroundColor: green[300],
                },
            }}
          />
    );
}

export default DataGridTable;