import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className="my-photo">
        <div className="my-photo-div">
          <Image src="/photo-filipe.png" alt="Black Github logo" width={150} height={150}/>
        </div>
      </section>
      <section className="about-me">
        <div className="about-me-title">
          <h1>About me</h1>
        </div>
        <div className="about-me-text">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A placeat facilis ex debitis nostrum veniam nisi, quibusdam numquam fugiat, incidunt veritatis sequi beatae consequatur obcaecati! Nisi similique earum dicta eaque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsa nemo. Inventore placeat officia, molestias praesentium nesciunt accusantium aspernatur repellat nam recusandae voluptatem doloribus minus ipsa, eum facere commodi beatae.</p>
        </div>
      </section>
      <section className="my-projects">
        <div className="my-projects-title">
          <h1>My Projects</h1>
        </div>
        <div className="my-projects-div">
          <Link href="/projects/projeto1">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto1.jpg" alt="projeto 1 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>NOME PROJETO</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adi...</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/projeto2">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto2.jpg" alt="projeto 2 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>NOME PROJETO</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adi...</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/projeto3">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto3.jpg" alt="projeto 3 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>NOME PROJETO</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adi...</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects/projeto4">
            <div className="my-projects-card">
              <div className="my-projects-card-image">
                <Image src="/projeto4.jpg" alt="projeto 4 imagem" width={200} height={120}/>
                <div className="my-projects-card-image">
                  <h3>NOME PROJETO</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adi...</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}