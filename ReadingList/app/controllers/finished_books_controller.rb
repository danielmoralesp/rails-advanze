class FinishedBooksController < ApplicationController
  def index
    books = Book.finished
    respond_to do |format|
      format.json { render json: books, status: 200 }
      format.xml { render xml: books, status: 200 }
    end
  end

  def create
    book = Book.new(book_params)

    if book.save
      render json: book, status: 201, location: book
    else
      render json: book.errors, status: 422
    end
  end

  private
    def book_params
      params.require(:book).permit(:title, :rating)
    end
end
