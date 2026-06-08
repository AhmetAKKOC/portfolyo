# Ahmet Akkoç Portfolyo

Next.js ile hazirlanmis hizli baslangic portfolyo sayfasi.

## Dosyalar

- `app/page.jsx`: Sayfa icerigi, bolumler, proje ve teknoloji listeleri.
- `app/layout.jsx`: Sayfa metadata ve kok layout.
- `app/globals.css`: Tum tasarim ve responsive kurallar.
- `public/assets/hero-workspace.png`: Hero alaninda kullanilan gorsel.

## Guncellenecek Yerler

- Icerikler CV gorselindeki bilgilere gore guncellendi.
- Proje ve deneyim detaylari `app/page.jsx` icindeki veri listelerinden duzenlenebilir.
- Domain alindiginda portfolyo linki ve metadata tekrar guncellenebilir.

## Calistirma

Bagimliliklari kur:

```bash
npm install
```

Gelistirme sunucusunu calistir:

```bash
npm run dev
```

Sonra tarayicida `http://localhost:3000` adresini ac. Bu calismada ayni
yerel adresi korumak icin `http://localhost:4173` portu kullanildi.
