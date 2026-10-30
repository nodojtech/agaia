# Architecture Decisions

- Product records may define an `images` collection; render it through the shared in-card gallery so official photography stays attached to catalog data.
- Featured products resolve names, photos and presentation prices from the existing catalog collection; do not duplicate product records, so highlights cannot drift from the active catalog.
- Catalog product details use one shared dialog populated from catalog records; recommendation links use product-name hashes observed through router location so category selection and details stay synchronized.
- Content-page introductions share a photographic banner; banner and ingredient overlays and motion are global semantic tokens to preserve legibility and reduced-motion support.