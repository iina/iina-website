# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :directory_indexes
activate :i18n

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  def localized_path(path)
    return path unless path.start_with? '/'
    if I18n.locale == :en
      path
    else
      "/#{I18n.locale}#{path}"
    end
  end

  def download_link(version)
    "https://dl.iina.io/IINA.v#{version}.dmg"
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

activate :external_pipeline,
   name: :webpack,
   command: build? ? 'yarn run build' : 'yarn run start',
   source: 'tmp/dist',
   latency: 1

config[:js_dir] = 'assets/javascripts'
config[:css_dir] = 'assets/stylesheets'
