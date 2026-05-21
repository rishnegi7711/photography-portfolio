import Image from "next/image";

const about = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="ml-20 mt-30">
        <Image
          src="/rishi.jpg"
          width={400}
          height={600}
          alt="Picture of Rishi"
        />
      </div>
      <div>
        <h1 className="text-4xl text-white mt-28 ml-10">A little about me</h1>
        <p className="text-white w-xl mt-20 ml-10">
          It started with a single frame in Bank, London — shot on my iPhone,
          completely by accident. Something about it stuck. I started paying
          more attention, shooting more intentionally, and eventually borrowed
          an old Fuji from a friend. The moment I held it, something clicked.
          Not just the shutter — something in me. A phone never gave me that.
          I've been shooting since July last year, drawn to the moments most
          people walk past. The way light cuts across a pavement. A shadow that
          tells more of a story than the subject itself. I'm not looking for the
          extraordinary — I'm looking for the ordinary, properly framed. Street
          photography is the first creative outlet I've ever had. There's
          something deeply satisfying about preserving a moment that would have
          otherwise disappeared. And there's a particular thrill in the
          restraint it demands — you have to capture without disturbing. The
          moment you interact with it, you've already lost it.
        </p>
      </div>
      <div>
        <h1 className="text-3xl text-white">My Daily Drivers</h1>
        <div>
          <Image src={"/XT-5.jpg"} alt="My camera" width={200} height={200} />
        </div>
        <div>
          <Image src={"/35mm f2.jpg"} alt="My lens" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default about;
