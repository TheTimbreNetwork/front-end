export default function Page({ params }: { params: { productId: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My Page</h1>
      <p>{params.productId}</p>
    </div>
  );
}
