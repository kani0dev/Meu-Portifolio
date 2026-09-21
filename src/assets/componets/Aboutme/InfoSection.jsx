import { Typography, Badge, Flex, Space, Divider } from 'antd';
import Resume from './Resume';


const { Text, Link } = Typography;

const infos = [
  { label: 'Formação',    value: 'DSM — FATEC (em andamento) conclução em 2027', link: false },
  { label: 'Localização', value: 'Ferraz de Vasconcelos, SP',               link: false },
  { label: 'GitHub',      value: 'github.com/Kani0Dev',         href: 'https://github.com/Kani0Dev' },
  { label: 'LinkedIn',    value: 'linkedin.com/in/Alan-Chagas', href: 'https://linkedin.com/in/alan-chagas-675189374' },
  { label: 'E-mail',      value: 'allanchagasilva@gmail.com',               href: 'mailto:allanchagas@email.com' },
];


export default function InfoSection() {
  return (
    <Flex
    vertical
    >
        <Text
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#6b7280',
        }}
      >
        Informações 
      </Text>

      <Flex 
      vertical
      gap={12}
      >
      {infos.map(({ label, value, href }) => (
          <Flex 
          key={label}
          gap={12}
          justify='space-between'
          >
            <Text>
                {label}
            </Text>

            {href ? (
              <Link 
              href={href} 
              target="_blank" 
              style={{ fontSize: 14 }}>
                {value}
              </Link>
            ) : (
              <Text style={{ fontSize: 14 }}>{value}</Text>
            )}
          </Flex>
        ))}
      </Flex>
        
      <Resume/>
 
    </Flex>
  );
}