# Architecture Decisions

- Product records may define an `images` collection; render it through the shared in-card gallery so official photography stays attached to catalog data.
- Featured products resolve names, photos and presentation prices from the existing catalog collection; do not duplicate product records, so highlights cannot drift from the active catalog.