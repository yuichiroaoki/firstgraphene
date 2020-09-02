import time
import responder
import graphene

api = responder.API()
#responderの使用例
@api.route("/")
def hello_world(req, resp):
    resp.text = "hello, world!"

@api.route("/hello/{who}")
def hello_to(req, resp, *, who):
    resp.text = f"hello, {who}!"
    
#jsonのレスポンス
@api.route("/hello/{who}/json")
def hello_to(req, resp, *, who):
    
    resp.media = {"hello": who}

#バックグラウンド処理
@api.route("/incoming")
async def receive_incoming(req, resp):

    @api.background.task
    def process_data(data):
        """Just sleeps for three seconds, as a demo."""
        time.sleep(3)


    # Parse the incoming data as form-encoded.
    # Note: 'json' and 'yaml' formats are also automatically supported.
    data = await req.media()

    # Process the data (in the background).
    process_data(data)

    # Immediately respond that upload was successful.
    resp.media = {'success': True}

if __name__ == '__main__':
    api.run()