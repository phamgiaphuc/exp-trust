export interface Ticket {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  position: string;
  total_experience: string;
  begin_date: Date;
  end_date?: Date;
  status: StatusType;
  note: string;
  proof_file: string;
}

// eslint-disable-next-line prettier/prettier
export type StatusType = "pending" | "verified" | "rejected";
