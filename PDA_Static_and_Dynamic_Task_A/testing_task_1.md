### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  def checkforAce(card)
  # Double equals sign should be used for comparison
    if card.value = 1
      return true
    else
      return false
    end
  end

# Typo: 'dif' instead of 'def'; required comma between parameters card1 and card2
  dif highest_card(card1 card2)
  if card1.value > card2.value
    #The below should return card1; 'card' is not an existing variable and 'name' is not a valid attribute for Card
    return card.name
  else
    card2
  end
end
# Unnecessary 'end'
end


def self.cards_total(cards)
  #Uninitialized 'total' variable
  total
  #Required 'do' at the end of the line
  for card in cards
    total += card.value
    #return should be moved outside of the loop
    #Total should be converted to String or interpolated using #{}
    return "You have a total of" + total
  end
end


```
