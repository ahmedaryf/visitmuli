export default async function handler(req, res) {
  const { method } = req;

  // Handle different HTTP methods
  switch (method) {
    case "POST":
      // Logic for creating a new transaction
      res.status(200).json({ message: "Create a new transaction" });
      break;
    case "GET":
      // Logic for querying a specific transaction or listing transactions
      res.status(200).json({ message: "Query or list transactions" });
      break;
    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
