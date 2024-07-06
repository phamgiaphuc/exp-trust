import { IoIosCloudDownload } from 'react-icons/io';
import { RowSelectionState } from '@tanstack/react-table';
import { useMemo } from 'react';
import { ticketData } from './TicketData';
import * as XLSX from 'xlsx';

interface ExportBtnProps {
  data: RowSelectionState;
  fileName?: string;
}

const ExportBtn = ({ data, fileName = 'Verifications' }: ExportBtnProps) => {
  const selectedTicketData = useMemo(() => {
    return Object.keys(data).map((data) => ticketData[Number(data)]);
  }, [data]);

  const exportFile = () => {
    const worksheet = XLSX.utils.json_to_sheet(selectedTicketData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
    XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : 'Sample.xlsx');
  };

  return (
    <button
      className='bg-gray-200 rounded-lg px-4 py-2 flex gap-2 items-center disabled:opacity-75 disabled:cursor-default cursor-pointer'
      disabled={Object.keys(data).length === 0}
      onClick={() => exportFile()}
    >
      <IoIosCloudDownload className='w-6 h-6' />
      Export
    </button>
  );
};

export default ExportBtn;
