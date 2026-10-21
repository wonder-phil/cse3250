FROM alpine
WORKDIR /home
COPY *.py /home/.
COPY *.txt /home/.
RUN apk add --update python3 py3-pip 
RUN python3 -m venv /opt/venv
RUN source /opt/venv/bin/activate
RUN /opt/venv/bin/pip install -r /home/requirements.txt
CMD [ "/opt/venv/bin/python", "-m" , "flask", "run", "--host=0.0.0.0"]
