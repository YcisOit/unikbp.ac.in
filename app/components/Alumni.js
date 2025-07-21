import Image from 'next/image';

export default function Home() {
  return (
    <div className="p-8">
     
      <section className="text-center pb-0 mb-16">
        <h1 className="text-3xl font-bold text-[#940e5c] mb-8">Eminent Alumni of UNIKBP</h1>
        <div className="flex justify-center gap-8 flex-wrap">
          <div>
            <Image src="/images/alumni1.jpg" alt="Priyanka M. Mohite" width={150} height={150} className="rounded" />
            <p className="mt-2">Priyanka M. Mohite</p>
          </div>
          <div>
            <Image src="/images/alumni2.jpg" alt="Sunita Mane" width={150} height={150} className="rounded" />
            <p className="mt-2">Sunita Mane</p>
          </div>
          <div>
            <Image src="/images/alumni3.png" alt="Shubhash Bhosale" width={150} height={150} className="rounded" />
            <p className="mt-2">Shubhash Bhosale</p>
          </div>
          <div>
            <Image src="/images/alumni4.png" alt="Dhairyashil Bhosale" width={150} height={150} className="rounded" />
            <p className="mt-2">Dhairyashil Bhosale</p>
          </div>
          <div>
            <Image src="/images/alumni5.png" alt="Suhas Mohite" width={150} height={150} className="rounded" />
            <p className="mt-2">Suhas Mohite</p>
          </div>
        </div>
      </section>
    </div>
  );
}
