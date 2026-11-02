# SRE Portfolio: Observability, Alerting & CI/CD Stack

![CI/CD Pipeline](https://github.com/Easton-tech/sre-portfolio/actions/workflows/ci.yml/badge.svg)

## 📌 О проекте
Демонстрационный SRE-проект, реализующий полный цикл обеспечения надёжности микросервиса. Включает в себя построение конвейера наблюдаемости (Observability), настройку алертинга на основе SLO (Service Level Objectives), проведение нагрузочного тестирования для валидации гипотез, а также автоматизацию сборки и публикации артефактов через CI/CD.

## 🛠 Стек технологий
- **Язык и приложение:** Python (Flask)
- **Мониторинг и алертинг:** Prometheus, Alertmanager, Grafana
- **Нагрузочное тестирование:** k6
- **Контейнеризация и CI/CD:** Docker, Docker Compose, GitHub Actions, GitHub Container Registry (GHCR)

## 🎓 Навыки SRE, применённые в проекте
- **Observability:** Настройка pull-модели сбора метрик, визуализация «Золотых сигналов» (Latency, Traffic, Errors). Написание сложных запросов на PromQL (`rate`, `histogram_quantile`).
- **Reliability Engineering:** Формализация SLI/SLO, расчёт Error Budget и создание политики заморозки релизов при исчерпании бюджета.
- **Incident Management:** Разработка правил алертинга на основе SLO, настройка маршрутизации и дедупликации алертов в Alertmanager, защита от ложных срабатываний (окно `for`).
- **Performance Testing:** Проведение нагрузочных тестов и анализ деградации системы под стрессом.
- **CI/CD Automation:** Настройка пайплайна в GitHub Actions (линтеринг, сборка), безопасная работа с секретами и автоматическая публикация Docker-образов в GHCR.
- **Troubleshooting:** Диагностика проблем контейнеров, работа с volume и понимание прав доступа в GitHub Actions.
