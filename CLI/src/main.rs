use std::fs;
use std::io::{self, Write};
use std::env;

fn is_echo(s: &str) -> bool {
    let word_count = s.split_whitespace().count();
    word_count >= 2
}

fn write(path: &str) -> std::io::Result<()> {
    let filename = path.to_string() + ".txt";
    let mut f = std::fs::File::create(filename)?;
    f.write_all("Hello, world!".as_bytes())?;
    Ok(())
}

fn delete(to_delete: &str) -> std::io::Result<()> {
    let filename = to_delete.to_string() + ".txt";
    let dir = env::current_dir()?;
    let path = dir.join(filename);
    fs::remove_file(path)?;
    Ok(())
}

// fn pwd() {
//     let path = env::current_dir();
//     match path {
//         Ok(path) => println!("{}", path.display()),
//         Err(e) => {
//             eprintln!("Failed to get current working directory: {}", e);
//         }
//     }
// }

fn main() {
    
    // cli program
    loop {
        println!("Enter a command: ");
        
        let cmds: [&str; 8] = ["ls", "echo", "pwd", "cls", "help", "quit", "create", "delete"];
        let mut cmd = String::new();
        io::stdin().read_line(&mut cmd).expect("Failed to read line. ");
        let mut cmd = cmd.trim();
        // let mut cmd_first = String::new();
        // let mut echo = String::new();

        if is_echo(cmd) {
            let mut index = 10;
            let bytes = cmd.as_bytes();
            for (i, &item) in bytes.iter().enumerate() {
                if item == b' ' {
                    index = i;
                    break
                }
            }
            let echo = &cmd[index + 1..];
            cmd = "echo";
            println!("{}", echo);
        }
        
        if !cmds.contains(&cmd) {
            if cmd != "echo" {
                println!("Invalid command. ");
            }
        }
        if cmd == "ls" {
            let paths = fs::read_dir("./").unwrap();

            for path in paths {
                println!("{}", path.unwrap().path().display())
            }
        }
        if cmd == "pwd" {
            let path = env::current_dir();
            match path {
                Ok(path) => println!("{}", path.display()),
                Err(e) => {
                    eprintln!("Failed to get current working directory: {}", e);
                }
            }

            // let dir = env::current_dir();
            // println!("{}", dir.display());
            // Ok(());
        }
        if cmd == "cls" {
            print!("{}[2J", 27 as char);
            print!("{esc}[2J{esc}[1;1H", esc = 27 as char);
        }
        if cmd == "help" {
            // list commands
            println!("Possible commands: ");
            for cmd in cmds {
                println!("{}", cmd);
            }
        }
        if cmd == "create" {
            println!("Enter the filename you want to create: ");

            let mut filename = String::new();
            io::stdin().read_line(&mut filename).expect("Failed to read line. ");
            let filename = filename.trim();

            let _ = write(filename);
        }
        if cmd == "del" {
            println!("Enter the filename you want to delete: ");

            let mut filename = String::new();
            io::stdin().read_line(&mut filename).expect("Failed to read line. ");
            let filename = filename.trim();

            let _ = delete(filename);
        }
        if cmd == "quit" {
            break;
        }
    }
}