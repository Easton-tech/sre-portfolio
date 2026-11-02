# SRE Portfolio: Observability, Alerting & CI/CD Stack

![CI/CD Pipeline](https://github.com/Easton-tech/sre-portfolio/actions/workflows/ci.yml/badge.svg)

> ⚠️ Если бейдж не отображается, скопируй свой: вкладка Actions -> CI/CD Pipeline -> три точки (...) -> Create status badge.

## 📌 О проекте
Полноценный SRE-стек для микросервиса: от наблюдаемости и алертинга до автоматической сборки и публикации Docker-образа. Проект демонстрирует практическое применение ключевых SRE-практик: SLI/SLO, Error Budget, Золотые сигналы, алертинг на основе SLO, CI/CD.

## 🛠 Стек технологий
- Python/Flask — приложение с экспортом метрик Prometheus.
- Prometheus — сбор и хранение time-series метрик (pull-модель).
- Grafana — визуализация и дашборды.
- Alertmanager — маршрутизация и управление алертами.
- k6 — нагрузочное тестирование.
- GitHub Actions — CI/CD пайплайн (линт, сборка, публикация образа).
- GitHub Container Registry (GHCR) — хранение Docker-образов.
- Docker Compose — оркестрация контейнеров.

## 🏗 Архитектура
App :8080 --> (scrape 5s) --> Prometheus :9090 --> (query) --> Grafana :3000
                                  |
                                  +--> (alerts) --> Alertmanager :9093
                                  ^
                                  |
                           k6 Load Test

GitHub: git push --> Actions (lint + build) --> GHCR (image) --> (pull)

---

## 📅 Что сделано по дням

### ✅ День 1: Observability (наблюдаемость)
- Приложение на Flask с метриками Prometheus (Counter, Histogram).
- Развёрнут стек: Prometheus + Grafana + App через Docker Compose.
- Настроен сбор метрик (scrape interval 5s).
- Дашборд «Золотые сигналы»: Latency (p95), Traffic (RPS), Error Rate.
- Формализованы SLI/SLO и Error Budget Policy — см. SLO.md.

### ✅ День 2: Alerting & Load Testing
- Добавлен Alertmanager для маршрутизации алертов.
- Настроено правило HighLatency (срабатывает при p95 > 300 мс в течение 1 минуты).
- Проведено нагрузочное тестирование через k6 (10 VU, 30 секунд).
- Проверен полный цикл: нагрузка -> деградация -> алерт (Pending -> Firing) -> Alertmanager.

### ✅ День 3: CI/CD
- Настроен GitHub Actions пайплайн .github/workflows/ci.yml:
  - Линтинг Python-кода (flake8).
  - Сборка Docker-образа.
  - Публикация образа в GHCR (ghcr.io/easton-tech/sre-portfolio:latest).
- Пайплайн триггерится на push и pull_request в main.
- Настроен GITHUB_TOKEN (или PAT GHCR_PAT) с правами packages: write.

---

## 🚀 Как запустить локально
docker compose up -d --build

Доступные интерфейсы:
- App: http://localhost:8080
- Prometheus (Targets): http://localhost:9090/targets
- Prometheus (Alerts): http://localhost:9090/alerts
- Grafana: http://localhost:3000 (admin/admin)
- Alertmanager: http://localhost:9093

## 🐳 Использовать готовый образ из GHCR
docker pull ghcr.io/easton-tech/sre-portfolio:latest

## 🧪 Запустить нагрузочный тест
docker run --rm -i --network sre-portfolio-day1_default grafana/k6 run - <load_test.js

---

## 📸 Скриншоты
- Дашборд Grafana (Золотые сигналы).
- Алерт в Prometheus (Firing).
- Алерт в Alertmanager.
- Зелёный пайплайн в GitHub Actions.
- Пакет в GHCR.

---

## 🎓 SRE-навыки, применённые в проекте
- Observability: pull-модель мониторинга, работа с Counter и Histogram, PromQL (rate, histogram_quantile).
- Reliability: формализация SLI/SLO/Error Budget, политика заморозки релизов.
- Incident Management: правила алертинга, for-окно для защиты от ложных срабатываний, маршрутизация в Alertmanager.
- Performance Testing: k6, анализ поведения под нагрузкой.
- CI/CD: автоматизация линта, сборки и публикации артефактов, работа с GHCR.
- Troubleshooting: диагностика проблем в Docker (логи, volume, конфиги), понимание прав доступа GitHub Actions.
