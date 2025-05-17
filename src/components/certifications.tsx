const certifications = [
  {
    title: "Video Production 1",
    issuer: "YouScience",
    date: "May 2025",
    link: null,
    id: "video_production_1"
  }
  // more...
];

export default function CertificationsSection() {
  return (
    <div className="flex flex-col gap-4 pl-3">
      {certifications.map((cert, idx) => (
        <div key={idx} className="flex flex-row gap-5 p-4">
            <img
                className="max-w-30 h-auto object-contain shadow"
                src={`/portfolio-v2/certificates/${cert.id}/thumbnail.jpg`}
                alt={cert.title}
            />
            <div>
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-gray-400">{cert.date}</p>
                <a
                    href={cert.link ?? `/portfolio-v2/certificates/${cert.id}/cert.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline text-sm"
                >
                    View Credential
                </a>
            </div>
        </div>
      ))}
    </div>
  );
}
