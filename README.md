# SRE Portfolio: Observability Stack

# О проекте
Минимальный, но полноценный стек наблюдаемости для микросервиса: приложение с метриками + Prometheus + Grafana + формализованные SLO.

## Стек технологий
- **Python/Flask** — приложение с экспортом метрик Prometheus.
- **Prometheus** — сбор и хранение time-series метрик (pull-модель).
- **Grafana** — визуализация и дашборды.
- **Docker Compose** — оркестрация контейнеров.

## Архитектура
[App :8080] --(scrape 5s)--> [Prometheus :9090] <--(query)--> [Grafana :3000]

## Что настроено
- **SLI/SLO и Error Budget**: см. [SLO.md](SLO.md).
- **Дашборд «Золотые сигналы»**: Latency (p95), Traffic (RPS), Error Rate.
- **Самовосстановление**: все контейнеры имеют политику `restart: unless-stopped`.

##  Как запустить
```bash
docker compose up -d --build
