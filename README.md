# SRE Portfolio: Observability, Alerting & CI/CD Stack

![CI/CD Pipeline](https://github.com/Easton-tech/sre-portfolio/actions/workflows/ci.yml/badge.svg)

## 📌 О проекте
Демонстрационный SRE-проект, реализующий полный цикл обеспечения надёжности микросервиса. Включает в себя построение конвейера наблюдаемости (Observability), настройку алертинга на основе SLO (Service Level Objectives), проведение нагрузочного тестирования для валидации гипотез, а также автоматизацию сборки (CI) и доставки приложения на сервер из реестра (CD) с использованием GitHub Container Registry.

## 🛠 Стек технологий
- **Язык и приложение:** Python (Flask)
- **Мониторинг и алертинг:** Prometheus, Alertmanager, Grafana
- **Нагрузочное тестирование:** k6
- **Контейнеризация и CI/CD:** Docker, Docker Compose, GitHub Actions, GitHub Container Registry (GHCR)
- **Скрипты автоматизации:** Bash (`deploy.sh`)

## 🎓 Навыки SRE, применённые в проекте
- **Observability:** Настройка pull-модели сбора метрик, визуализация «Золотых сигналов» (Latency, Traffic, Errors). Написание сложных запросов на PromQL (`rate`, `histogram_quantile`).
- **Reliability Engineering:** Формализация SLI/SLO, расчёт Error Budget и создание политики заморозки релизов при исчерпании бюджета.
- **Incident Management:** Разработка правил алертинга на основе SLO, настройка маршрутизации и дедупликации алертов в Alertmanager, защита от ложных срабатываний.
- **Performance Testing:** Проведение нагрузочных тестов (k6) и анализ деградации системы под стрессом.
- **CI/CD Automation:** Настройка пайплайна в GitHub Actions (линтеринг, сборка), безопасная работа с секретами и автоматическая публикация Docker-образов в GHCR.
- **Continuous Deployment (CD):** Переход от локальной сборки к деплою из реестра. Написание идемпотентного скрипта деплоя (`deploy.sh`). Использование Git Flow (работа через release-ветки и теги).
- **Security & Troubleshooting:** Понимание принципов работы с PAT (Personal Access Tokens), настройка прав доступа к пакетам (GHCR) и диагностика проблем контейнеров.
- **Infrastructure as Code (IaC):** Написание декларативных конфигураций на Terraform (HCL). Отработан полный жизненный цикл: init, plan, apply, destroy. Настроено локальное зеркало провайдеров (filesystem_mirror) для работы в изолированной среде.
