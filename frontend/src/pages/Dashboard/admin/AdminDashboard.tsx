/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useMemo, useState } from 'react';
import { IoIosCloudDownload } from 'react-icons/io';
import { IoCheckmark, IoFilterSharp, IoTrashBinOutline } from 'react-icons/io5';
import { ticketData } from './TicketData';
import { StatusType, Ticket } from '../../../types/ticket';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowSelectionState,
  SortingState,
  useReactTable
} from '@tanstack/react-table';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { BsThreeDots } from 'react-icons/bs';
import { format } from 'date-fns';
import { FaArrowDown, FaArrowUp, FaMinus } from 'react-icons/fa';
import ExportBtn from './ExportBtn';

const AdminDashboard = () => {
  const [data, setData] = useState<Ticket[]>(ticketData);
  const [selectedData, setSelectedData] = useState<RowSelectionState>({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const columnHelper = createColumnHelper<Ticket>();

  const selectedLength = useMemo(() => {
    return Object.keys(selectedData).length;
  }, [selectedData]);

  const toggleSortById = useCallback((id: string) => {
    setSorting((prev) => {
      const isSortedById = prev.find((sort) => sort.id === id);
      if (isSortedById) {
        return prev.map((sort) => (sort.id === id ? { ...sort, desc: !sort.desc } : sort));
      }
      return [{ id, desc: false }];
    });
  }, []);

  const findSortingStateById = useCallback(
    (id: string) => {
      return sorting.find((sort) => sort.id === id);
    },
    [sorting]
  );

  const sortingStateByName = useMemo(() => findSortingStateById('name'), [findSortingStateById]);
  const sortingStateByExperience = useMemo(() => findSortingStateById('total_experience'), [findSortingStateById]);

  const columns = [
    columnHelper.accessor('id', {
      header: (props) => {
        return (
          <div className='flex gap-2 items-center'>
            <input
              type='checkbox'
              className='w-4 h-4 cursor-pointer'
              checked={props.table.getIsAllRowsSelected() || props.table.getIsSomeRowsSelected()}
              onChange={props.table.getToggleAllRowsSelectedHandler()}
            />
            <span>No.</span>
          </div>
        );
      },
      cell: (props) => {
        const rowIndex = props.table.getSortedRowModel().flatRows.findIndex((row) => row.id === props.row.id) + 1;
        return (
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              className={`w-4 h-4 cursor-pointer ${props.row.original.status === 'Rejected' && 'invisible'}`}
              checked={props.row.getIsSelected()}
              disabled={!props.row.getCanSelect()}
              onChange={props.row.getToggleSelectedHandler()}
            />
            <span>{rowIndex}</span>
          </div>
        );
      }
    }),
    columnHelper.accessor('name', {
      header: () => {
        return (
          <div
            onClick={() => toggleSortById('name')}
            className='flex gap-2 items-center p-2 w-fit cursor-pointer rounded-xl hover:bg-slate-100'
          >
            <span>Name</span>
            {sortingStateByName ? sortingStateByName.desc ? <FaArrowUp /> : <FaArrowDown /> : <FaMinus />}
          </div>
        );
      },
      cell: (props) => <span className='font-semibold'>{props.getValue()}</span>
    }),
    columnHelper.accessor('position', {
      header: 'Position/Role',
      cell: (props) => <span>{props.getValue()}</span>
    }),
    columnHelper.accessor('total_experience', {
      header: () => {
        return (
          <div
            onClick={() => toggleSortById('total_experience')}
            className='flex gap-2 items-center p-2 w-fit cursor-pointer rounded-xl hover:bg-slate-100'
          >
            <span>Total Experiences</span>
            {sortingStateByExperience ? sortingStateByExperience.desc ? <FaArrowUp /> : <FaArrowDown /> : <FaMinus />}
          </div>
        );
      },
      cell: (props) => <span>{props.getValue()}</span>
    }),
    columnHelper.accessor('begin_date', {
      header: 'Begin Date',
      cell: (props) => {
        return <span>{format(new Date(props.getValue()), 'MMMM do, yyyy')}</span>;
      }
    }),
    columnHelper.accessor('end_date', {
      header: 'End Date',
      cell: (props) => {
        const value = props.getValue();
        if (value) {
          return <span>{format(new Date(value), 'MMMM do, yyyy')}</span>;
        }
        return '---';
      }
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (props) => {
        const statusType = props.getValue() as StatusType;
        if (statusType === 'Pending') {
          return (
            <div className='py-2 px-4 rounded-2xl text-yellow-600 bg-yellow-100 w-fit flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-yellow-600' />
              <span>{statusType}</span>
            </div>
          );
        }
        if (statusType === 'Rejected') {
          return (
            <div className='py-2 px-4 rounded-2xl text-red-800 bg-red-200 w-fit flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-red-800' />
              <span>{statusType}</span>
            </div>
          );
        }
        return (
          <div className='py-2 px-4 rounded-2xl text-green-800 bg-green-200 w-fit flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-green-800' />
            <span>{statusType}</span>
          </div>
        );
      }
    }),
    columnHelper.accessor('note', {
      header: 'Note',
      cell: (props) => <span>{props.getValue()}</span>
    }),
    columnHelper.display({
      id: 'actions',
      cell: () => (
        <button>
          <BsThreeDots />
        </button>
      )
    })
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      rowSelection: selectedData,
      sorting: sorting
    },
    onRowSelectionChange: setSelectedData,
    onSortingChange: setSorting,
    enableRowSelection: (row) => row.original.status !== 'Rejected'
  });

  return (
    <div className='p-4 h-screen'>
      <div className='bg-white h-full border border-gray-400 flex flex-col'>
        <div className='flex justify-between px-8 py-4'>
          <div className='flex flex-col'>
            <span className='text-3xl font-semibold'>Pending verification</span>
            <span className='text-[#828282]'>Manage people's verification here</span>
          </div>
          <div className='flex gap-4 items-center font-light'>
            <button className='bg-gray-200 rounded-lg px-4 py-2 flex gap-2 items-center'>
              <IoFilterSharp className='w-6 h-6' />
              Filters
            </button>
            <ExportBtn data={selectedData} />
            <button
              className='bg-red-600 px-4 py-2 rounded-lg flex gap-2 items-center text-white disabled:opacity-75'
              disabled={!selectedLength}
            >
              <IoTrashBinOutline className='w-6 h-6' />
              Delete ({selectedLength})
            </button>
            <button
              className='bg-blue-600 px-4 py-2 rounded-lg text-white flex gap-2 items-center disabled:opacity-75'
              disabled={!selectedLength}
            >
              <IoCheckmark className='w-6 h-6' />
              Verify ({selectedLength})
            </button>
          </div>
        </div>
        <div className='flex-1 overflow-hidden'>
          <div className='h-full overflow-auto'>
            <table className='w-full text-left table-auto'>
              <thead className='bg-gray-200 sticky top-0'>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className='capitalize px-3 py-6'>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.length > 0
                  ? table.getRowModel().rows.map((row) => (
                      <tr key={row.id} className='border-b border-gray-600'>
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id} className='px-3 py-4'>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
        <div className='justify-end flex items-center gap-2 m-4'>
          <div className='flex items-center gap-1 mr-2'>
            <span>Page rows count: </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
              className='bg-transparent'
            >
              {[5, 10, 20, 50].map((pageSize, index) => (
                <option key={index} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
          <span className='mr-2 font-semibold'>
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <button
            className={`p-2 bg-gray-200 rounded-xl disabled:opacity-50 cursor-pointer disabled:cursor-default`}
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <GrFormPrevious className='w-6 h-6' />
          </button>
          <button
            className={`p-2 bg-gray-200 rounded-xl disabled:opacity-50 cursor-pointer disabled:cursor-default`}
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
          >
            <GrFormNext className='w-6 h-6' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
