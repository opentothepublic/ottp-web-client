type TransferData = {
  id: number;
  timestamp: number;
  username: string;
  owner: string;
  from: number;
  to: number;
  user_signature: string;
  server_signature: string;
};

type TransferResponse = {
  transfer: TransferData;
};
