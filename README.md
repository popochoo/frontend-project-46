### Hexlet tests and linter status:
[![Actions Status](https://github.com/popochoo/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/popochoo/frontend-project-46/actions)

## About

**"Вычислитель отличий"** — программа, определяющая разницу между двумя структурами данных. Это популярная задача, для которой существует множество онлайн-сервисов, например https://www.jsondiff.com. Похожий механизм используется при выводе тестов или при автоматическом отслеживании изменений в файлах конфигурации.

Особенности утилиты:
- Поддерживает различные форматы ввода: yaml, json;
- Генерация отчетов в виде обычного текста, стильно и в формате JSON.

Примеры использования:
1. <a href="#default-comparison-flat-json">"Сравнение плоских файлов (JSON)"</a>
2. <a href="#default-comparison-flat-yaml">"Сравнение плоских файлов (YAML)"</a>
3. <a href="#stylish-comparison-nested">"Сравнение вложенных файлов со стильным форматом"</a>
4. <a href="#plain-comparison-nested">"Сравнение вложенных файлов с обычным форматом"</a>
5. <a href="#json-comparison-nested">"Сравнение вложенных файлов с форматом json"</a>

## Использование

Прежде чем продолжить, у вас должен быть установлен Node.js.

```shell
# Clone the repo
git clone https://github.com/popochoo/frontend-project-46
cd frontend-project-46

# Install dependencies
make install

# Run
make gendiff
```

## CLI

```shell
# Runs npm-publish with flag (--dry-run)
make publish

# Runs Eslint against source code for quality
make lint

# Runs Jest
make test

# Runs Jest in code coverage mode
make test-coverage

# Runs Jest in watch mode
make watch
```

<h2 id="default-comparison-flat-json">Сравнение плоских файлов (JSON)</h2>
Простое сравнение 2-х файлов с расширением JSON без указания формата выходных данных.

[![asciicast](https://asciinema.org/a/7sU9EunQioHYImc29l4pHZV3a.svg)](https://asciinema.org/a/7sU9EunQioHYImc29l4pHZV3a)

<h2 id="default-comparison-flat-yaml">Сравнение плоских файлов (YAML)</h2>
Простое сравнение 2-х файлов с расширением YAML без указания формата выходных данных.

[![asciicast](https://asciinema.org/a/GTH1BIYqlh7SxvtZMpt1GefAl.svg)](https://asciinema.org/a/GTH1BIYqlh7SxvtZMpt1GefAl)

<h2 id="stylish-comparison-nested">Сравнение вложенных файлов со «стильным» форматом</h2>
Сравнение 2-х файлов с расширением JSON и YAML со «стильным» форматом выходных данных.

[![asciicast](https://asciinema.org/a/77YK08vIftMVdLtiv0pizz6jm.svg)](https://asciinema.org/a/77YK08vIftMVdLtiv0pizz6jm)

<h2 id="plain-comparison-nested">Сравнение вложенных файлов с «простым» форматом</h2>
Сравнение двух файлов с расширением JSON и YAML с «простым» форматом выходных данных.

[![asciicast](https://asciinema.org/a/RI6HcCE1qC43HZxWpajCerjJU.svg)](https://asciinema.org/a/RI6HcCE1qC43HZxWpajCerjJU)

<h2 id="json-comparison-nested">Сравнение вложенных файлов в формате json</h2>
Сравнение двух файлов с расширением JSON и YAML с форматом выходных данных json.

[![asciicast](https://asciinema.org/a/KEprZqpBzFfjbhNsDdeKhpoSM.svg)](https://asciinema.org/a/KEprZqpBzFfjbhNsDdeKhpoSM)
