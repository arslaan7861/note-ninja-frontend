<select
className="bg-transparent w-11/12 uppercase border border-primary text-sm p-2 px-4 appearance-none rounded-full outline-none "
value={note.course}
onChange={(e) => setNote({ ...note, course: e.target.value })} >
<option value="" disabled>
choose course
</option>
<option value="b-tech">btech</option>
<option value="B-pharma">B.pharma</option>
<option value="D-phrma">D.pharma</option>
<option value="BBA">BBA</option>
<option value="polytechnic">polytechnic</option>
<option value=""></option>
</select>

        {/* YEAR  */}
        <select
          className="bg-transparent w-11/12 uppercase border border-primary text-sm p-2 px-4 appearance-none rounded-full outline-none "
          value={note.year}
          onChange={(e) => setNote({ ...note, year: e.target.value })}
        >
          <option value="" disabled>
            choose year
          </option>
          <option value="first">first</option>
          <option value="second">second</option>
          <option value="third">third</option>
          <option value="fourth">fourth</option>
        </select>
        {/* SUBJECT  */}
        <select
          className="bg-transparent w-11/12 uppercase border border-primary text-sm p-2 px-4 appearance-none rounded-full outline-none "
          value={note.subject}
          onChange={(e) => setNote({ ...note, subject: e.target.value })}
        >
          <option value="" disabled>
            choose subject
          </option>
          <option value="maths">maths</option>
          <option value="maths">maths</option>
          <option value="maths">maths</option>
          <option value="maths">maths</option>
        </select>
        {/* SELECT UNIT  */}
        <select
          className="bg-transparent w-11/12 uppercase border border-primary text-sm p-2 px-4 appearance-none rounded-full outline-none "
          value={note.unit}
          onChange={(e) => setNote({ ...note, unit: e.target.value })}
        >
          <option value="" disabled>
            choose unit
          </option>
          <option value="maths">maths</option>
          <option value="maths">maths</option>
          <option value="maths">maths</option>
          <option value="maths">maths</option>
        </select>
