// components
import MainPage from "./MainPage";

const PublisherPage = () => {
  return (
    <MainPage>
      <main className="flex xxs:flex-col xxs:gap-4 sm:mt-6 items-center justify-center xxs:text-xs sm:text-sm md:text-base">
        <div className="flex xxs:flex-col sm:flex-row xxs:gap-4 sm:items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              src="/6a4648e2-edfc-4be7-8a4b-ea8877561002.JPG"
              className="object-cover xxs:w-full xxs:h-full rounded-2xl"
            />
            <h6>Gramedia Rajeg</h6>
          </div>
          <div className="flex flex-col items-center w-full card">
            <table className="xs:w-64 sm:w-80 md:w-96 xxs:h-40 md:h-56">
              <tbody>
                {[
                  ["ID", "b77751ec-23bb-4e29-a031-03c34d389578"],
                  ["Alamat", "Jl. Nusa Indah 2, Rajeg, Kab.Tangerang, Banten"],
                  ["No. Telepon", "087777890876"],
                ].map(([title, value], i) => (
                  <tr key={i}>
                    <td className="font-bold xxs:text-xs sm:text-sm md:text-base">
                      {title}
                    </td>
                    <td className="xxs:text-xs sm:text-sm md:text-base">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p className="leading-loose">
            Gramedia Rajeg adalah salah satu penerbit buku terbesar di
            Indonesia. Penerbit ini didirikan pada tahun 1970 oleh P.T. Gramedia
            Widiasarana Indonesia. Gramedia Rajeg berkantor pusat di Jakarta
            Selatan, dan memiliki cabang di berbagai kota di Indonesia. Gramedia
            Rajeg menerbitkan berbagai jenis buku, termasuk buku non-fiksi, buku
            fiksi, buku anak-anak, buku remaja, buku agama, buku bisnis, buku
            motivasi, buku self-help, dan buku lainnya. Gramedia Rajeg juga
            menerbitkan berbagai jenis majalah, seperti majalah Tempo, majalah
            Femina, majalah Hai, majalah Gadis, dan majalah lainnya. Gramedia
            Rajeg telah menerbitkan lebih dari 100.000 judul buku, dan telah
            terjual lebih dari 1 miliar kopi. Gramedia Rajeg adalah salah satu
            penerbit buku paling sukses di Indonesia, dan telah memberikan
            kontribusi besar bagi perkembangan literasi di Indonesia. Gramedia
            Rajeg juga menerbitkan berbagai buku karya penulis Indonesia,
            seperti Pramoedya Ananta Toer, Mochtar Lubis, Andrea Hirata, Dee
            Lestari, Tere Liye, dan lainnya. Gramedia Rajeg adalah salah satu
            penerbit buku yang paling banyak diminati oleh masyarakat Indonesia.
            Buku-buku yang diterbitkan oleh Gramedia Rajeg dapat ditemukan di
            berbagai toko buku di Indonesia, termasuk Gramedia Bookstore,
            Gramedia Digital, dan Gramedia Online.
            Berikut adalah beberapa buku yang diterbitkan oleh Gramedia Rajeg:
            <ul className="list-disc p-4">
              <li>Harry Potter karya J.K. Rowling</li>
              <li>The Lord of the Rings karya J.R.R. Tolkien</li>
              <li>The Da Vinci Code karya Dan Brown</li>
            </ul>
          </p>
        </div>
      </main>
    </MainPage>
  );
};

export default PublisherPage;
