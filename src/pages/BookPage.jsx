// components
import MainPage from "./MainPage";

const BookPage = () => {
  return (
    <MainPage>
      <main className="flex xxs:flex-col xxs:gap-4 sm:mt-6 items-center justify-center xxs:text-xs sm:text-sm md:text-base">
        <div className="flex xxs:flex-col sm:flex-row xxs:gap-4 sm:items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              src="/71aa034d-d435-40e0-a462-134f6e5d209c.jpg"
              className="object-cover w-full h-full rounded-2xl"
            />
            <h6>The Lord of The Rings</h6>
          </div>
          <div className="flex flex-col items-center w-full card">
            <table className="xs:w-64 sm:w-80 md:w-96 xxs:h-40 md:h-56">
              <tbody>
                {[
                  ["Tahun terbit", "1954"],
                  ["Penulis", "Achmad Farhan Fauzan"],
                  ["Penerbit", "Gramedia Rajeg"],
                  ["Genre", "Fiction"],
                  ["Subgenre", "Fantasy - Dark Fantasy"],
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
            The Lord of the Rings adalah novel fantasi epik karya J. R. R.
            Tolkien. Novel ini pertama kali diterbitkan dalam tiga jilid pada
            tahun 1954 dan 1955. The Lord of the Rings adalah salah satu karya
            fiksi paling populer dan berpengaruh yang pernah ditulis. Novel ini
            telah diterjemahkan ke dalam lebih dari 38 bahasa dan telah terjual
            lebih dari 150 juta kopi di seluruh dunia. The Lord of the Rings
            berlatar di dunia fiksi Middle-earth. Cerita dimulai ketika Sauron,
            seorang penyihir jahat, berusaha untuk mendapatkan kembali One Ring,
            sebuah cincin sihir yang memiliki kekuatan untuk menaklukkan
            Middle-earth. Frodo Baggins, seorang hobbit, ditugaskan untuk
            menghancurkan One Ring dengan membawanya ke Mordor, tempat Sauron
            tinggal. Frodo dibantu oleh sekelompok teman, termasuk Gandalf si
            penyihir, Aragorn sang pangeran, Legolas sang elf, Gimli sang dwarf,
            dan Boromir sang manusia. Perjalanan Frodo dan teman-temannya penuh
            dengan bahaya. Mereka harus menghadapi monster, penyihir, dan
            rintangan lainnya. Mereka juga harus menghadapi perselisihan
            internal di antara mereka sendiri. Namun, mereka akhirnya berhasil
            menghancurkan One Ring dan menyelamatkan Middle-earth dari
            kehancuran. The Lord of the Rings adalah novel yang kompleks dan
            kaya akan detail. Novel ini menggabungkan unsur-unsur fantasi,
            petualangan, dan mitologi. The Lord of the Rings juga memiliki
            tema-tema yang mendalam, seperti kebaikan melawan kejahatan, harapan
            melawan keputusasaan, dan pentingnya persahabatan. The Lord of the
            Rings telah diadaptasi menjadi film, permainan video, dan berbagai
            karya seni lainnya. Novel ini telah menginspirasi banyak orang di
            seluruh dunia dan telah menjadi salah satu karya sastra paling
            penting abad ke-20.
          </p>
        </div>
      </main>
    </MainPage>
  );
};

export default BookPage;
