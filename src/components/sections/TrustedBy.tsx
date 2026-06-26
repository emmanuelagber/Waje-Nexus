import { Container } from '@/components/layout/Container';
import totalEnergies from '@/assets/logo_totalenergies 1.png';
import aiico from '@/assets/AIICO_Insurance_PLC_ 1.png';
import sundryMarkets from '@/assets/sundryMarket.png';
import providusBank from '@/assets/Providus_Bank_logo 1.png';
import fmn from '@/assets/FMN.png';

const clients = [
  { name: 'TotalEnergies', logo: totalEnergies },
  { name: 'AIICO Insurance', logo: aiico },
  { name: 'Sundry Markets', logo: sundryMarkets },
  { name: 'ProvidusBank', logo: providusBank },
  { name: 'FMN', logo: fmn },
];

// Each slot = 137px logo + 64px right-padding = 201px
// Two sets = 10 × 201px = 2010px → translateX(-50%) = -1005px (exactly one set)
const GAP = 64;

export function TrustedBy() {
  return (
    <section className="py-10">
      <Container>
        {/* <p className="text-center text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest">
          Trusted by enterprise teams
        </p> */}

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="flex items-center"
            style={{ animation: 'marquee 28s linear infinite' }}
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="shrink-0"
                style={{ paddingRight: `${GAP}px` }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{ width: '137px', height: '100px' }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
