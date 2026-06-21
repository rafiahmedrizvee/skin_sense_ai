const AdminDashboard = () => {
  return (
    <section className="p-8 bg-gray-50 min-h-screen">

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-3xl shadow">
          <h3>Total Analyses</h3>
          <p className="text-3xl font-bold mt-2">
            2,847
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow">
          <h3>Reports Generated</h3>
          <p className="text-3xl font-bold mt-2">
            1,954
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow">
          <h3>Users</h3>
          <p className="text-3xl font-bold mt-2">
            1,245
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow">
          <h3>Accuracy</h3>
          <p className="text-3xl font-bold mt-2">
            96%
          </p>
        </div>

      </div>

      <div className="bg-white rounded-3xl shadow p-8 mt-10">

        <h2 className="text-2xl font-semibold mb-6">
          Recent Analyses
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr>
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Tone</th>
                <th className="text-left py-3">Confidence</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>2026-06-20</td>
                <td>Medium</td>
                <td>96%</td>
                <td>Completed</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
};

export default AdminDashboard;