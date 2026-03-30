import { Typography, Badge } from 'antd';

const { Text, Link } = Typography;

const infos = [
  { label: 'Formação',    value: 'DSM — FATEC (em andamento)', link: false },
  { label: 'Localização', value: 'São Paulo, SP',               link: false },
  { label: 'GitHub',      value: 'github.com/Kani0Dev',         href: 'https://github.com/Kani0Dev' },
  { label: 'LinkedIn',    value: 'linkedin.com/in/Alan-Chagas', href: 'https://linkedin.com/in/alan-chagas-675189374' },
  { label: 'E-mail',      value: 'allanchagasilva@gmail.com',               href: 'mailto:allanchagas@email.com' },
];

export default function InfoSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* Título */}
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

      {/* Linhas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {infos.map(({ label, value, href }) => (
          <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
            <Text style={{ minWidth: 90, fontSize: 13, color: '#6b7280' }}>
              {label}
            </Text>
            {href ? (
              <Link href={href} target="_blank" style={{ fontSize: 14 }}>
                {value}
              </Link>
            ) : (
              <Text style={{ fontSize: 14 }}>{value}</Text>
            )}
          </div>
        ))}
      </div>

      {/* Divider manual */}
      <div style={{ borderTop: '1px solid #e5e7eb', margin: '4px 0' }} />

      {/* Disponibilidade */}
      <Badge
        color="#16a34a"
        text={
          <Text style={{ color: '#16a34a', fontWeight: 500, fontSize: 13 }}>
            Disponível para oportunidades
          </Text>
        }
      />

    </div>
  );
}