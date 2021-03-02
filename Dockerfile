FROM ruby:3.0.0-alpine3.13

# https://rubygems.org/gems/html-proofer/versions/
# https://github.com/gjtorikian/html-proofer

RUN apk add --update build-base libcurl
RUN gem install html-proofer --version 3.18.6 --no-document

WORKDIR /opt

ENTRYPOINT ["htmlproofer", "--check-html", "--disable-external", "--only-4xx"]