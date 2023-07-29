import 'dotenv/config'
import App from "./src/app";

class Serser extends App {
  private port = process.env.PROT || 8000;

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}

const server = new Serser();
server.start();
