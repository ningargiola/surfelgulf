import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <section className="h-full">
      <div className="header sticky top-0 z-50">
        <h1 className="surf-el-gulf xl:text-center">Surf El Gulf <span className="beta">BETA</span></h1>
        <Link href="/reports" className="cta-button report-button">Submit Report</Link>
      </div>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <p className="h1 mb-6">Our Mission</p>
            <p className="text w-100% mb-9 text-white/60">
              Lets be honest...
              <br/><br/>
              Surf reports can be misleading. Your buddy <br/>who "checked it this morning"? Probably wrong.<br/> And let's face it, squinting at NOAA charts in <br/>font size .8 isn't going to cut it. 
              <br/><br/>
              That's where we come in.
              <br/><br/>
              We pull in data from all the top surf sources, <br/>crunch the numbers, and give you <br/>just what you need to score the best waves—without <br/>the hassle.
              <br/><br/>
              Help us help you. Start submitting your own reports today, <br/>and we will build surf forecasts by surfers, for surfers.
              <br/><br/>
              Let's get you ripping, no guesswork needed!
            </p>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 pt-10">
            <Image 
              className="curved-image"
              src="/assets/SnellBoss.png" 
              alt="Snell Photo" 
              width={500} 
              height={300} 
              priority={true}
            />
          </div>
        </div>
        <div className="text-center ">
          <p className="h1 mb-6">How can you help us?</p>
          <p className="h3 mb-10">
            While tools like Surfline and SurfForecast offer valuable insights into ocean conditions, we believe there’s room to enhance the experience further. Imagine having a system that not only interprets surf data but also learns from human observations and local knowledge to provide even more accurate predictions.
            <br/><br/>
            That's where our generative AI comes in.
            <br/><br/>
            We are developing an AI-powered platform that builds on the foundations of existing surf forecasting tools. By integrating real-time surf data with reports from experienced surfers, our AI will learn and adapt, offering insights that go beyond mere numbers. It will analyze wave height, wind speed, tide shifts, and swell direction, but also factor in nuanced human insights—those subtle details only an experienced eye can catch.
            <br/><br/>
            With every new report, the AI model grows smarter. It continuously refines its ability to suggest the best times and locations for surf—anticipating changes in conditions like swell periods, offshore winds, and even crowd levels, based on patterns learned from previous sessions.
            <br/><br/>
            Our goal is to create a resource that not only tells you what’s happening at your favorite break but also when and where the best waves are likely to form. Whether you're a beginner looking for mellow conditions or a seasoned surfer chasing the next big swell, our platform will provide reliable, personalized predictions that adapt to your unique preferences and local knowledge.
            <br/><br/>
            By training the AI on a combination of historical data, human observations, and live reports, we aim to provide a dynamic and evolving surf analysis tool—one that keeps getting better with each use. This way, you'll have the advantage of not just real-time data but real-world expertise in every forecast.
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="text-content">
            <p>Created with stoke by <strong>Snell & Gargoyle</strong></p>
            <p>Riding the waves of innovation, one swell at a time.</p>
          </div>
            <Image
              className="footer-image"
              src="/assets/logoWhite.png" 
              alt="Dev tag" 
              width={50} 
              height={50} 
              priority={true}
            />
        </div>
      </footer>
    </section>
    
  );
}
