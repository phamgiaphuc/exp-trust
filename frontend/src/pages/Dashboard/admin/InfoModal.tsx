import { IoCaretBack, IoCaretForward, IoClose } from 'react-icons/io5';
import { Ticket } from '../../../types/ticket';
import { format } from 'date-fns';
import { useMemo } from 'react';
import PdfIcon from '../../../assets/icons/icon-pdf.svg';
import PngIcon from '../../../assets/icons/icon-png.svg';
import JpgIcon from '../../../assets/icons/icon-jpg.svg';
import { FaDownload } from 'react-icons/fa';

interface InfoModalProps {
  open: boolean;
  data?: Ticket;
  onClose: () => void;
  onClickNext: () => void;
  onClickPrevious: () => void;
}

const InfoModal = ({ open, data, onClose, onClickNext, onClickPrevious }: InfoModalProps) => {
  const fileType = useMemo(() => data?.proof_file.split('.')[1], [data?.proof_file]);

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center trasition-colors ${open ? 'visible bg-black/25' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow-xl px-6 py-8 trasition-all w-2/5 ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 p-1 rounded-lg text-gray-600 bg-white hover:bg-red-200 hover:text-red-600'
        >
          <IoClose className='w-6 h-6' />
        </button>
        <div className='text-center px-8'>
          <span className='text-xl font-semibold'>User Detailed Information</span>
          <div className='grid grid-cols-2 gap-2 mt-2 text-left'>
            <div className='col-span-2 flex gap-2 items-center font-semibold'>
              <span>ID: </span>
              <span>{data?.id}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-semibold'>Name: </span>
              <span>{data?.name}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-semibold'>Email: </span>
              <span>{data?.email}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-semibold'>Phone Number: </span>
              <span>{data?.phone_number}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-semibold'>Position: </span>
              <span>{data?.position}</span>
            </div>
            <div className='col-span-2 flex gap-2 items-center'>
              <span className='font-semibold'>Total Experience: </span>
              <span>{data?.total_experience}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-semibold'>Begin Date: </span>
              <span>{data?.begin_date ? format(new Date(data.begin_date), 'MMMM do, yyyy') : ''}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-semibold'>End Date: </span>
              <span>{data?.end_date ? format(new Date(data.end_date), 'MMMM do, yyyy') : ''}</span>
            </div>
            <div className='col-span-2 flex gap-2 items-center'>
              <span className='font-semibold'>Note: </span>
              <span>{data?.note}</span>
            </div>
            <div className='col-span-2 flex gap-2 flex-col'>
              <span className='font-semibold'>Attached Proof:</span>
              <div className='p-4 rounded-xl bg-slate-50 border border-gray-600 w-full flex gap-4 items-center'>
                <div className='flex-1 gap-2 items-center flex'>
                  <span className='font-semibold'>{data?.proof_file}</span>
                  {fileType === 'pdf' && <img src={PdfIcon} alt='pdf-icon' className='w-12 h-12' />}
                  {fileType === 'png' && <img src={PngIcon} alt='png-icon' className='w-12 h-12' />}
                  {fileType === 'jpg' && <img src={JpgIcon} alt='jpg-icon' className='w-12 h-12' />}
                </div>
                <div>
                  <button className='font-semibold px-4 py-2 bg-slate-200 rounded-xl flex gap-2 items-center hover:bg-slate-300'>
                    <FaDownload />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-1/2 -translate-y-4 left-1'>
          <button onClick={() => onClickPrevious()} className='p-1 hover:bg-slate-50 rounded-full'>
            <IoCaretBack className='w-6 h-6' />
          </button>
        </div>
        <div className='absolute top-1/2 -translate-y-4 right-1'>
          <button onClick={() => onClickNext()} className='p-1 hover:bg-slate-50 rounded-full'>
            <IoCaretForward className='w-6 h-6' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
