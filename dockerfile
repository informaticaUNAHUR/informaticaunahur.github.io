FROM ruby:3.1.4 AS jekyll-build
RUN apt-get update -qq && apt-get install -y --no-install-recommends build-essential libpq-dev nodejs \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app    
COPY --chown=nonroot:nonroot Gemfile /app/Gemfile
COPY --chown=nonroot:nonroot Gemfile.lock /app/Gemfile.lock
RUN bundle install 

FROM ruby:3.1.4 AS jekyll-runtime
RUN addgroup --system nonroot && adduser --system --ingroup nonroot nonroot
WORKDIR /app
COPY --chown=nonroot:nonroot --from=jekyll-build /usr/local/bundle /usr/local/bundle
COPY --chown=nonroot:nonroot . /app
RUN mkdir -p /app/_site && chown -R nonroot:nonroot /app
USER nonroot
CMD ["bundle", "exec", "jekyll", "serve", "--livereload", "--watch", "--host", "0.0.0.0"]
EXPOSE 4000 35729