import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"


const detailedServices = [
  {
    id: 1,
    title: "Foot Reflexology",
    description:
      "Stimulate natural healing and relieve tension through precise pressure points on your feet — improving circulation, balance, and total body wellness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M37.5 21.795V10h2v11.795c0 1.87.647 3.718 1.451 5.625c.563 1.336 1.05 2.965 1.05 4.58c-.001 2.349-1.055 3.905-2.446 4.832C38.219 37.722 36.633 38 35.5 38c-1.367 0-2.267-.292-3.028-.665c-.235-.115-.477-.25-.689-.367q-.14-.078-.259-.142a5 5 0 0 0-.84-.377c-.274-.092-.867-.156-1.696-.169c-.788-.012-1.67.022-2.444.067c-.847.049-1.599.35-2.52.72q-.42.17-.9.352c-.95.356-2.213.581-4.124.581c-1.983 0-2.93-.114-3.581-.393a3.7 3.7 0 0 1-.625-.357a4 4 0 0 0-.183-.117a3.4 3.4 0 0 1-.938.447c-.82.256-2.159.42-4.673.42c-.858 0-1.594-.206-2.168-.64c-.576-.437-.89-1.028-1.038-1.613c-.285-1.115-.014-2.341.27-3.098A1 1 0 0 1 7 32h3.65l.627-.502c1.165-.932 2.49-1.584 3.833-2.064c1.733-.62 3.928-1.57 5.918-2.833c1.944-1.234 3.6-2.71 4.495-4.388l.982-10.308l1.99.19l-1 10.5a1 1 0 0 1-.1.352c-1.108 2.215-3.158 3.986-5.295 5.343c-2.153 1.367-4.494 2.375-6.317 3.027c-1.2.43-2.312.987-3.257 1.742l-.627.503a2 2 0 0 1-1.25.438H7.751c-.088.434-.112.892-.02 1.253c.064.248.17.407.308.512c.142.108.42.235.961.235c2.486 0 3.564-.17 4.077-.33c.226-.07.332-.137.412-.192l.032-.024c.086-.066.318-.242.532-.348a1 1 0 0 1 .763-.055c.47.157.765.323 1.004.479l.168.111c.101.068.138.093.218.127c.224.096.777.232 2.794.232c1.762 0 2.767-.209 3.422-.454c.215-.08.443-.173.682-.27c.966-.39 2.117-.856 3.324-.926a37 37 0 0 1 2.591-.07c.816.013 1.696.07 2.297.271c.453.151.828.337 1.157.514l.342.188c.185.103.347.193.538.287c.514.252 1.114.46 2.147.46c.867 0 2.03-.222 2.945-.832C39.305 34.595 40 33.65 40 32c0-1.244-.383-2.594-.892-3.803c-.815-1.934-1.608-4.102-1.608-6.402"/><path d="M34 23a1 1 0 0 1 1 1h-1h1v.022l-.001.04q0 .047-.006.127a7.4 7.4 0 0 1-.357 1.814c-.36 1.084-1.104 2.444-2.622 3.355a1 1 0 0 1-1.029-1.716c.983-.589 1.49-1.479 1.754-2.27a5.4 5.4 0 0 0 .258-1.297l.003-.068v-.012A1 1 0 0 1 34 23"/></g></svg>
    ),
  },
  {
    id: 2,
    title: "Hand & Ear Reflexology",
    description:
      "Experience deep relaxation and improved energy flow with gentle hand and ear reflexology that eases stress and promotes inner calm.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M24 7c-6.542 0-11.846 4.925-11.846 11H10c0-7.18 6.268-13 14-13s14 5.82 14 13c0 4.501-2.465 8.467-6.204 10.8c-2.552 1.59-4.565 3.707-4.565 6.111V35c0 4.418-3.858 8-8.616 8S10 39.418 10 35v-2h2.154v2c0 3.314 2.893 6 6.461 6s6.462-2.686 6.462-6v-.089c0-3.457 2.83-6.096 5.518-7.772c3.17-1.976 5.25-5.332 5.25-9.139c0-6.075-5.303-11-11.845-11m-4.911 10.02C19.472 15.315 21.052 14 23 14c2.244 0 4 1.745 4 3.82h2c0-3.248-2.721-5.82-6-5.82s-6 2.572-6 5.82c0 1.64.639 2.951 2.019 3.709c.749.411 1.25.76 1.556 1.041q.111.103.173.175c-.184.087-.485.186-.936.273l.376 1.964c.672-.128 1.296-.32 1.769-.623c.494-.317.966-.865.902-1.65c-.055-.666-.49-1.206-.932-1.612c-.472-.434-1.129-.873-1.946-1.322a1.72 1.72 0 0 1-.742-.744c.693.046 1.547.152 2.388.383c.943.258 1.797.652 2.403 1.223c.569.535.96 1.26.97 2.327c-.13 1.361-.452 2.24-.82 2.81c-.364.562-.801.87-1.255 1.049c-.472.186-.993.243-1.517.243c-.26 0-.51-.014-.75-.03l-.092-.005a10 10 0 0 0-.602-.028c-.95 0-1.43.736-1.653 1.168c-.154.299-.305.707-.436 1.058c-.055.148-.106.286-.152.401c-.19.475-.374.82-.595 1.049c-.185.19-.415.321-.817.321c-.531 0-.807-.12-.947-.216a.74.74 0 0 1-.282-.376a1.7 1.7 0 0 1-.068-.733v-.003v.003l-.001.003v.002s0 .002-.985-.178l-.983-.179v.002l-.001.002l-.001.005l-.002.014a2 2 0 0 0-.021.16c-.01.097-.02.23-.02.386c0 .308.036.745.204 1.202c.17.468.483.967 1.03 1.341c.545.373 1.24.565 2.077.565c.968 0 1.708-.368 2.252-.928c.506-.521.807-1.174 1.017-1.7c.096-.239.17-.439.233-.613c.1-.27.176-.477.277-.674q.023-.045.042-.077l.3.018l.098.007c.249.015.55.033.878.033c.65 0 1.451-.068 2.25-.382c.815-.32 1.595-.887 2.201-1.824c.596-.922.99-2.153 1.137-3.762q.004-.045.004-.09c0-1.658-.634-2.918-1.598-3.827c-.935-.881-2.136-1.393-3.247-1.697c-1.12-.306-2.225-.422-3.038-.463zm1.103 11.9l-.009.01z" clip-rule="evenodd"/></svg>
    ),
  },
  {
    id: 3,
    title: "Head & Shoulder Massage",
    description:
      "Release built-up tension and soothe tired muscles with our signature head and shoulder massage — perfect for unwinding after a busy day.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" d="M8.463 18.591c0-1.77.667-4.417 2.663-6.61C13.095 9.817 16.444 8 21.997 8c2.9 0 4.797.353 6.221.917c1.414.56 2.434 1.358 3.56 2.387l.258.235c.885.805 1.362 1.24 1.615 1.904c1.276 3.35 3.548 8.163 5.02 11.198c.33.681-.17 1.471-.914 1.471H35.56V33a1 1 0 0 1-1 1h-5.445a1 1 0 0 0-.137-.006Q28.72 34 28.48 34h-.127c-2.286-.006-3.388-.358-5.014-.941a1 1 0 1 0-.676 1.882c1.547.555 2.754.94 4.745 1.036V42h2v-6h5.153a3 3 0 0 0 3-3v-4.888h.197c2.233 0 3.681-2.346 2.713-4.343c-1.474-3.04-3.71-7.78-4.95-11.038c-.434-1.14-1.289-1.909-2.099-2.637l-.294-.267c-1.195-1.092-2.427-2.077-4.172-2.77C27.22 6.37 25.05 6 21.997 6c-6.029 0-9.947 1.994-12.35 4.634c-2.376 2.61-3.184 5.76-3.184 7.957c0 5.66 3.198 10.064 5.037 12.047V42h2V29.831l-.285-.291c-1.62-1.659-4.752-5.75-4.752-10.949"/></svg>
    ),
  },
  {
    id: 4,
    title: "Herbal Soaking & Compression",
    description:
      "Indulge in the calming power of herbal blends that detoxify, soothe, and rejuvenate your skin while easing muscle stiffness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.635 4.697c-2.263.374-4.739 1.285-6.308 2.855c-1.432 1.432-1.738 3.14-1.53 4.67c.175 1.273.703 2.39 1.205 3.069l2.048-2.048l-.786-2.355a.5.5 0 1 1 .95-.316l.626 1.88l1.888-1.887l-.39-1.945a.5.5 0 1 1 .981-.196l.258 1.291l1.989-1.988a.5.5 0 1 1 .707.707l-1.988 1.989l1.29.258a.5.5 0 0 1-.195.98l-1.945-.389l-1.888 1.888l1.881.627a.5.5 0 1 1-.316.948l-2.355-.785l-2.048 2.048c.68.502 1.796 1.03 3.069 1.204c1.53.21 3.238-.097 4.67-1.529c1.57-1.57 2.481-4.045 2.854-6.308c.186-1.124.234-2.17.173-2.99a5 5 0 0 0-.164-1.014c-.08-.273-.164-.408-.214-.458s-.185-.135-.458-.214a5 5 0 0 0-1.014-.164c-.82-.061-1.866-.013-2.99.172m-6.64 12.014c.824.646 2.156 1.278 3.648 1.482c1.77.242 3.814-.114 5.512-1.812c1.78-1.78 2.744-4.49 3.134-6.853c.196-1.189.251-2.316.183-3.228c-.034-.456-.1-.87-.2-1.217c-.098-.335-.242-.661-.468-.887s-.552-.37-.887-.467a6 6 0 0 0-1.217-.2c-.912-.07-2.04-.014-3.228.182c-2.362.39-5.074 1.355-6.853 3.133c-1.698 1.699-2.054 3.743-1.812 5.514c.204 1.49.836 2.823 1.482 3.646l-3.643 3.642a.5.5 0 0 0 .708.708z" clip-rule="evenodd"/></svg>
    ),
  },
  {
    id: 5,
    title: "Pedicure & Waxing",
    description:
      "Pamper yourself with our professional pedicure and gentle waxing services — for soft, smooth, and refreshed skin.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M23.225 10.762h-5.2a6 6 0 1 1-12 0H.775"/><path stroke-linecap="round" stroke-linejoin="round" d="M8.275 10.012a3.75 3.75 0 0 0 7.5 0c0-2.655-2.937-3.548-2.053-7.877a.75.75 0 0 0-1.208-.735a12.3 12.3 0 0 0-4.239 8.612"/><path d="M1.525 22.387a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m6.75.75a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m7.5.75a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m6.75.75a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m0-6.75a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m-3 4.5a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m-15 .75a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m-3-3a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"/></g></svg>
    ),
  },
  {
    id: 6,
    title: "Chair Massage",
    description:
      "A quick yet deeply relaxing massage that melts away tension, boosts energy, and leaves you feeling recharged — ideal for busy days or travelers on the go.",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3M6 6c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H7v-2c0-.88-.39-1.67-1-2.22zm15 10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h14v-4c0-.55.45-1 1-1s1 .45 1 1z"/></svg>
    ),
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
          <Header />
          {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-serif text-5xl md:text-6xl text-foreground mb-6">Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
Step inside Wing Reflexology and explore our serene spaces, thoughtfully designed to help you unwind, rejuvenate, and experience total wellness.          </p>
        </div>
      </section>
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServices.map((service) => (
            <Card
              key={service.id}
className="p-8 bg-background-900/80 backdrop-blur-sm 
           hover:bg-accent-800/90 hover:border-accent-700 
           text-primary-100 hover:shadow-2xl hover:shadow-background-900/50 
           transition-all duration-500 group"            >
              <div className="text-primary/10 group-hover:bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>
              <h3 className="heading-serif text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
            <Link href="/contact">Book a Service Today</Link>
          </Button>
        </div>
      </div>
    </section>
    <Footer />
        </main>
  )
}
