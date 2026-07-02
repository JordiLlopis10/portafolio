# Despliegue y SEO

## Desplegar en Vercel (5 minutos)

1. **Sube el proyecto a GitHub** (repositorio nuevo, p. ej. `portfolio`):

   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/JordiLlopis10/portfolio.git
   git push -u origin main
   ```

2. **Importa en Vercel**: [vercel.com/new](https://vercel.com/new) → inicia sesión
   con GitHub → selecciona el repositorio → **Deploy**. Vercel detecta Next.js;
   no cambies nada.

3. **Variables de entorno** (Project → Settings → Environment Variables):

   | Variable | Valor | Obligatoria |
   | --- | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | URL final, p. ej. `https://jordillopis.es` | Sí (para canonical/OG/sitemap correctos) |
   | `NEXT_PUBLIC_FORM_ENDPOINT` | Endpoint de Formspree (`https://formspree.io/f/XXXXXXXX`) | No, pero muy recomendada: activa el envío real del formulario de contacto |
   | `GITHUB_TOKEN` | Token clásico sin scopes (solo lectura pública) | No (sube el límite de la API a 5000 req/h) |

   Tras añadirlas, **Redeploy**.

4. A partir de aquí, **cada `git push` a `main` publica automáticamente**.

## Dominio propio (recomendado para SEO de tu nombre)

Ejemplo con `jordillopis.es`:

1. Compra el dominio en cualquier registrador (.es: DonDominio, Namecheap,
   el propio Vercel…). Da igual dónde lo compres.
2. Vercel → Project → Settings → **Domains** → añade `jordillopis.es` y sigue
   las instrucciones de DNS (un registro A hacia Vercel y un CNAME para `www`).
3. Actualiza `NEXT_PUBLIC_SITE_URL=https://jordillopis.es` y redeploy.

### Certificado SSL (HTTPS)

**No hay que comprar ni configurar nada.** Al añadir el dominio, Vercel emite
automáticamente un certificado TLS de Let's Encrypt, lo renueva solo antes de
caducar y redirige todo el tráfico HTTP a HTTPS. El candado aparece en cuanto
el DNS propaga (minutos u horas).

## Formulario de contacto → tu correo

El formulario tiene dos modos:

- **Sin configurar** (por defecto): abre el cliente de correo del visitante con
  el mensaje redactado hacia `llopisgodinojordi@gmail.com`. Funciona sin backend,
  pero si el visitante no tiene cliente de correo configurado, no envía nada.
- **Con Formspree** (recomendado): el mensaje se envía desde la propia página y
  **llega directamente a tu Gmail**, con confirmación visual para el visitante.

Para activarlo: crea una cuenta gratuita en [formspree.io](https://formspree.io)
con tu Gmail → New Form → copia el endpoint → añádelo como
`NEXT_PUBLIC_FORM_ENDPOINT` en Vercel → Redeploy. Incluye honeypot anti-spam
(`_gotcha`) y asunto fijo (`_subject`) ya configurados en el formulario.

## Checklist SEO post-lanzamiento

- [ ] **Google Search Console**: verifica la propiedad (método DNS o etiqueta HTML) y envía `https://tu-dominio/sitemap.xml`.
- [ ] **Bing Webmaster Tools**: importa desde Search Console (1 clic).
- [ ] **LinkedIn**: añade la URL en tu perfil (sección Contacto y en el titular si cabe). LinkedIn es la señal más fuerte para posicionar tu nombre.
- [ ] **GitHub**: pon la URL en el campo *website* de tu perfil y en los repos destacados.
- [ ] Comparte la web en X/LinkedIn — la imagen Open Graph ya está lista; puedes previsualizarla en [opengraph.xyz](https://www.opengraph.xyz).
- [ ] Busca `Jordi Llopis Godino` en Google al cabo de 1–2 semanas y comprueba la indexación (`site:tu-dominio.com`).

El JSON-LD de tipo `Person` (nombre, ubicación, `sameAs` → GitHub/LinkedIn) ya
está en el `<head>`; es lo que permite a Google asociar la web con tu identidad.

## Verificar rendimiento

- **Lighthouse** (Chrome DevTools → Lighthouse → Mobile): la página es estática,
  sin fuentes externas ni JS innecesario; debería puntuar 95–100 en las cuatro
  categorías sobre el deploy de producción (en local `npm run start`, no `dev`).
- **Core Web Vitals reales**: Vercel → pestaña *Speed Insights* (opcional, un clic).

## Mantenimiento

| Tarea | Frecuencia |
| --- | --- |
| `npm outdated` / `npm update` | Mensual |
| Revisar que la sección GitHub carga datos | Tras cambios de API o token |
| Actualizar CV PDF y proyectos | Cada hito profesional |
