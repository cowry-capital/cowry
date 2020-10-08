use rand::Rng;
use std::io;
use std::cmp::Ordering;

fn main() {
    println!("GUESSING GAME");
    println!("---------------");
    println!("");
    println!("Guess the number!");
    
    // create the random number
    let secret_number = rand::thread_rng().gen_range(1,101);

    
    println!("The secret number is: {}", secret_number);

    loop {
        println!("");
        println!("Please input your guess:");
        println!("");
        
        let mut guess = String::new();
    
        io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read a line");
    
        println!("You guesed: {}", guess);
    
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };
        
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too Small!"),
            Ordering::Greater => println!("Too Big!"),
            Ordering::Equal => {
                println!("Bingo, my nigga, you win");
                break;
            }
        }
    }

}
