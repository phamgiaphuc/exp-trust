export interface Ticket {
  id: string;
  name: string;
  position: string;
  total_experience: string;
  begin_date: Date;
  end_date?: Date;
  status: StatusType;
  note: string;
}

// eslint-disable-next-line prettier/prettier
export type StatusType = "Pending" | "Verified" | "Rejected";
