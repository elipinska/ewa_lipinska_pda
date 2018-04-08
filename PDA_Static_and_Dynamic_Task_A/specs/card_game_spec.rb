require('minitest')
require_relative('../card')
require_relative('../testing_task_2')

class CardGameTest << Minitest::Test

  def setup
    @ace_of_spades = Card.new("Spades", 1)
    @five_of_hearts = Card.new("Hearts", 5)
    @ten_of_diamonds = Card.new("Diamonds", 10)
    @seven_of_clubs = Card.new("Clubs", 7)
    @card_game = CardGame.new()
  end

  def test_checkforAce__returns_true
    assert_equal(true, @card_game.checkforAce(@ace_of_spaces))
  end

  def test_checkforAce__returns_false
    assert_equal(false, @card_game.checkforAce(@five_of_hearts))
  end

  def test_highest_card__return_first_card
    assert_equal(@ten_of_diamonds, @card_game.highest_card([@ten_of_diamonds, @five_of_hearts])
  end

  def test_highest_card__return_second_card
    assert_equal(@ten_of_diamonds, @card_game.highest_card([@five_of_hearts, @ten_of_diamonds])
  end

  def test_cards_total
    assert_equal("You have a total of 23", @card_game.cards_total([@ace_of_spaces, @five_of_hearts, @ten_of_diamonds, @seven_of_clubs]))
  end


end
