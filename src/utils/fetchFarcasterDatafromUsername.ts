export const fetchFarcasterDataFromUsername = async (
  username: string
): Promise<TransferResponse> => {
  const url = `https://fnames.farcaster.xyz/transfers/current?name=${username}`;
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(
      `Error fetching Farcaster username! Status: ${response.status}`
    );
  return response.json();
};
