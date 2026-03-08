import React from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'disclaimer' | 'sitemap' | null;
}

const content = {
  privacy: {
    title: "Kebijakan Privasi",
    body: (
      <div className="space-y-4">
        <p>Terima kasih telah mengunjungi portofolio saya. Privasi Anda sangat penting bagi saya. Halaman ini menjelaskan bagaimana informasi Anda dikelola.</p>
        <h4 className="font-bold text-white">1. Pengumpulan Data</h4>
        <p>Saya hanya mengumpulkan informasi yang Anda berikan secara sukarela melalui formulir kontak, seperti nama dan alamat email Anda. Informasi ini digunakan semata-mata untuk menanggapi pesan Anda.</p>
        <h4 className="font-bold text-white">2. Keamanan</h4>
        <p>Saya berkomitmen untuk memastikan bahwa informasi Anda aman dan tidak akan dibagikan kepada pihak ketiga tanpa izin Anda.</p>
        <h4 className="font-bold text-white">3. Cookies</h4>
        <p>Situs ini mungkin menggunakan cookies fungsional untuk meningkatkan pengalaman navigasi Anda di web portofolio ini.</p>
      </div>
    )
  },
  terms: {
    title: "Syarat dan Ketentuan",
    body: (
      <div className="space-y-4">
        <p>Dengan mengakses situs web ini, Anda setuju untuk terikat oleh syarat dan ketentuan penggunaan berikut:</p>
        <h4 className="font-bold text-white">1. Kepemilikan Intelektual</h4>
        <p>Semua konten, desain, dan kode di situs ini adalah milik Bagas Portofolio kecuali dinyatakan lain. Anda tidak diperbolehkan menyalin atau mendistribusikan ulang konten tanpa izin eksplisit.</p>
        <h4 className="font-bold text-white">2. Penggunaan yang Diizinkan</h4>
        <p>Anda diizinkan menggunakan situs ini untuk melihat proyek saya dan menghubungi saya untuk keperluan profesional.</p>
        <h4 className="font-bold text-white">3. Batasan Tanggung Jawab</h4>
        <p>Saya tidak bertanggung jawab atas kerugian yang mungkin timbul dari penggunaan situs ini atau keterlambatan teknis.</p>
      </div>
    )
  },
  disclaimer: {
    title: "Pernyataan Penyangkalan (Disclaimer)",
    body: (
      <div className="space-y-4">
        <p>Informasi yang disediakan di situs web ini hanya untuk tujuan informasi umum dan profesional.</p>
        <h4 className="font-bold text-white">1. Akurasi</h4>
        <p>Meskipun saya berusaha menjaga informasi tetap akurat, saya tidak memberikan jaminan dalam bentuk apa pun tentang kelengkapan atau keandalan informasi tersebut.</p>
        <h4 className="font-bold text-white">2. Tautan Eksternal</h4>
        <p>Situs ini mungkin berisi tautan ke situs web eksternal (seperti GitHub atau LinkedIn). Saya tidak memiliki kendali atas konten dan sifat situs-situs tersebut.</p>
        <h4 className="font-bold text-white">3. Hasil Proyek</h4>
        <p>Proyek yang ditampilkan adalah representasi dari kemampuan saya dan hasil di masa depan dapat bervariasi tergantung pada kebutuhan spesifik.</p>
      </div>
    )
  },
  sitemap: {
    title: "Peta Situs (Sitemap)",
    body: (
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="font-bold text-white">Navigasi Utama</h4>
          <ul className="list-disc list-inside text-white/60">
            <li><a href="#home" className="hover:text-[#7C4DFF]">Home</a></li>
            <li><a href="#about" className="hover:text-[#7C4DFF]">About Me</a></li>
            <li><a href="#skills" className="hover:text-[#7C4DFF]">Skills</a></li>
            <li><a href="#projects" className="hover:text-[#7C4DFF]">Projects</a></li>
            <li><a href="#experience" className="hover:text-[#7C4DFF]">Experience</a></li>
            <li><a href="#contact" className="hover:text-[#7C4DFF]">Contact</a></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-white">Media Sosial</h4>
          <ul className="list-disc list-inside text-white/60">
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    )
  }
};

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose, type }) => {
  if (!type) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A051A]/90 backdrop-blur-md"
          />
          
          <Motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#120B2E] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C4DFF]/10 blur-[100px] -z-10" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-black text-white mb-8 pr-12">
              {content[type].title}
            </h2>

            <div className="text-white/60 leading-relaxed max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
              {content[type].body}
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/5 text-center">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-[#7C4DFF] text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(124,77,255,0.4)] transition-all"
              >
                Tutup
              </button>
            </div>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
