// components
import MainPage from "./MainPage";

const AuthorPage = () => {
  return (
    <MainPage>
      <main className="flex xxs:flex-col xxs:gap-4 sm:mt-6 items-center justify-center xxs:text-xs sm:text-sm md:text-base">
        <div className="flex xxs:flex-col sm:flex-row xxs:gap-4 sm:items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              src="/120b2cef-aa42-46a2-821a-8cbfdf82ebdc.jpg"
              className="object-cover w-full h-full rounded-2xl"
            />
            <h6>Ali Hanafiah Lubis</h6>
          </div>
          <div className="flex flex-col items-center w-full card">
            <table className="xs:w-64 sm:w-80 md:w-96 xxs:h-40 md:h-56">
              <tbody>
                {[
                  ["Lahir", "Padangsidempuan 2002"],
                  ["Nama pena", "Ali Bogel"],
                  ["Pekerjaan", "Penulis & Programmer"],
                  ["Bahasa", "Bahasa Indonesia"],
                  ["Kebangsaan", "Indonesia"],
                  ["Almamater", "Universitas Nasional Pasim"],
                  ["Periode", "2002 - sekarang"],
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
            Ali Hanafiah Lubis adalah seorang penulis dan programmer. Ia lahir
            di Medan, Sumatera Utara, pada tahun 1980. Ia menempuh pendidikan di
            Universitas Sumatera Utara, dan lulus dengan gelar Sarjana Ilmu
            Komputer pada tahun 2003. Setelah lulus dari kuliah, Ali bekerja
            sebagai programmer di sebuah perusahaan swasta. Namun, ia tidak puas
            dengan pekerjaannya, dan memutuskan untuk menjadi penulis. Ia
            menulis berbagai macam cerita, mulai dari cerita pendek, novel,
            hingga naskah film. Karya-karya Ali telah diterbitkan di berbagai
            penerbit, dan telah memenangkan beberapa penghargaan, seperti
            Penghargaan Sastra Khatulistiwa Republika tahun 2010 untuk novelnya
            yang berjudul "Ruang Waktu". Selain menulis, Ali juga aktif sebagai
            pembicara di berbagai forum dan seminar tentang penulisan kreatif.
            Ia juga mengajar menulis di beberapa lembaga pendidikan. Ali adalah
            seorang penulis yang produktif. Ia telah menulis lebih dari 20 judul
            buku, dan karya-karyanya telah dibaca oleh jutaan orang di Indonesia
            dan di luar negeri. Ali adalah seorang penulis yang inspiratif. Ia
            menunjukkan kepada kita bahwa dengan kerja keras dan pantang
            menyerah, kita bisa mencapai apa pun yang kita inginkan. Berikut
            adalah beberapa karya Ali Hanafiah Lubis:
            <ul className="list-disc p-4">
              <li>Ruang Waktu (Novel, 2010)</li>
              <li>Sepotong Langit (novel, 2011)</li>
              <li>Bintang di Langit Malam (novel, 2012)</li>
            </ul>
            Ali Hanafiah Lubis adalah seorang penulis yang berbakat dan
            inspiratif. Ia telah memberikan banyak karya yang telah
            menginspirasi jutaan orang di Indonesia dan di luar negeri.
          </p>
        </div>
      </main>
    </MainPage>
  );
};

export default AuthorPage;
