require 'test_helper'
require 'mime/types'

class ListingBooksTest < ActionDispatch::IntegrationTest
  test 'listing books' do
    get '/books'

    assert_equal 200, response.status
    assert_equal response.content_type.as_json
  end
end
